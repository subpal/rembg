'use client'
import React, { useState, useRef, useEffect } from 'react'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import 'react-image-crop/dist/ReactCrop.css'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Payment from "@/components/ui/payment";

export default function App() {
    const [imgSrc, setImgSrc] = useState('')
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
    const blobUrlRef = useRef('')
    const [crop, setCrop] = useState<Crop>({ unit: '%', width: 50, height: 50, x: 25, y: 25 })
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop({ unit: '%', width: 0, height: 0, x: 0, y: 0 })
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const { width, height } = e.currentTarget
        setCrop({ unit: 'px', width: width * 0.5, height: height * 0.5, x: width * 0.25, y: height * 0.25 })
    }

    async function onDownloadCropClick() {
        const image = imgRef.current
        const previewCanvas = previewCanvasRef.current
        if (!image || !previewCanvas || !completedCrop) {
            throw new Error('Crop canvas does not exist')
        }

        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height

        const offscreen = new OffscreenCanvas(completedCrop.width * scaleX, completedCrop.height * scaleY)
        const ctx = offscreen.getContext('2d')
        if (!ctx) {
            throw new Error('No 2d context')
        }

        ctx.drawImage(
            previewCanvas,
            0,
            0,
            previewCanvas.width,
            previewCanvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
        )
        const blob = await offscreen.convertToBlob({ type: 'image/png' })

        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current)
        }
        blobUrlRef.current = URL.createObjectURL(blob)

        if (hiddenAnchorRef.current) {
            hiddenAnchorRef.current.href = blobUrlRef.current
            hiddenAnchorRef.current.click()
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
                canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, scale, rotate)
            }
        }, 100)

        return () => {
            clearTimeout(handler)
        }
    }, [completedCrop, scale, rotate])

    return (
        <div className="App">
            <div className="flex flex-col items-center justify-center">
                {!!imgSrc && (
                    <ReactCrop
                        className={"rounded-2xl m-5"}
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                    >
                        <img
                            className={"rounded-2xl"}
                            ref={imgRef}
                            alt="Crop me"
                            src={imgSrc}
                            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                            onLoad={onImageLoad}
                        />
                    </ReactCrop>
                )}
                <div className={"flex flex-col justify-center content-center m-3"}>
                    <Input id="file" type="file" onChange={onSelectFile} className=" my-2 h-12 text-xl"/>
                    <div>
                        <label htmlFor="scale-input">Scale: </label>
                        <Input
                            id="scale-input"
                            type="number"
                            step="0.1"
                            value={scale}
                            disabled={!imgSrc}
                            onChange={(e) => setScale(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="rotate-input">Rotate: </label>
                        <Input
                            id="rotate-input"
                            type="number"
                            value={rotate}
                            disabled={!imgSrc}
                            onChange={(e) =>
                                setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
                            }
                        />
                    </div>
                </div>
                {!!completedCrop && (
                    <>
                        <div>
                            <canvas className={"rounded-2xl m-5"}
                                    ref={previewCanvasRef}
                                    style={{
                                        border: '1px solid black',
                                        objectFit: 'contain',
                                        width: completedCrop.width,
                                        height: completedCrop.height,
                                    }}
                            />
                        </div>
                        <div>
                            <Button className="my-2 h-12 text-xl" onClick={onDownloadCropClick}>Download</Button>
                            <a
                                href="#hidden"
                                ref={hiddenAnchorRef}
                                download
                                style={{
                                    position: 'absolute',
                                    top: '-200vh',
                                    visibility: 'hidden',
                                }}
                            >
                                Hidden download
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}