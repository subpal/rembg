import React, {Fragment} from 'react';
import Subtitle from "@/components/subtitle";
import Link from "next/link";

function Page() {
    return (
        <Fragment>
            <Subtitle text={"About Us"}/>
            <div className="content p-10">
                Welcome to BGrem.in, your go-to destination for seamless image editing tools that are free, fast,
                and easy to use. Our mission is to empower everyone—from casual users to creative professionals—with
                simple yet powerful tools to bring their vision to life.
                <br/>
                <div className="text-2xl pt-3">
                    Who are we?
                </div>
                At <Link href={'/'}>BGrem.in</Link>, we specialize in:
                <br/>
                • Background Removal: Remove unwanted backgrounds from your images effortlessly.
                <br/>
                • Image Resizing: Adjust your images to fit your needs in just a few clicks.
                <br/>
                • Cropping Tools: Perfectly frame your images for any purpose.
                <br/>

                <div className="text-2xl pt-3">
                    Why Choose Us?
                </div>

                • Free for All: Enjoy premium tools without spending a dime.
                <br/>
                • AI-Powered Efficiency: Our advanced technology delivers high-quality results in seconds.
                <br/>
                • User-Friendly: No technical skills required—our platform is designed to make editing intuitive and
                fun.
                <br/>
                <div className="text-2xl pt-3">
                    Creator
                </div>
                Founded by Subham Pal, <Link href={'/'}>BGrem.in</Link> was built with a vision to democratize access to professional-grade
                image editing tools. Whether you're a student, entrepreneur, designer, or hobbyist, we're here to
                help you create amazing visuals with ease.
                <br/>

                Join our growing community and let BGrem.in make your editing experience smooth and hassle-free!

            </div>
        </Fragment>
    );
}

export default Page;