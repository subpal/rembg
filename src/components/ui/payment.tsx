import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

function Payment() {
    return (
        <Link className="flex my-2 h-12 w-full justify-center" href={'http://razorpay.me/@bgrem'}>
            <Button className="my-2 h-12 text-xl bg-blend-hue w-full bg-blue-600 hover:bg-blue-500" >Pay for Tea </Button>
        </Link>
    );
}

export default Payment;