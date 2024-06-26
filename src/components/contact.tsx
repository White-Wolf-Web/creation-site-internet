import React from "react";
import Image from "next/image";
import MailPic from "../../public/icons/Mail.png";
import PhonePic from "../../public/icons/Phone.png";

export default function Contact() {
	return (
		<section id="contact" className="py-20 px-4 mx-auto max-w-4xl border-solid border-t-2 border-gray-light sm:py-24 md:py-28 lg:py-32">
			<p className=" text-3xl max-w-lg mx-auto text-center mb-6 font-medium sm:mb-4 sm:text-4xl sm:leading-snug sm:max-w-xl md:text-5xl md:leading-snug md:max-w-3xl">
				Intéressé ? Je suis à votre disposition pour une
				<strong className="italic"> collaboration</strong>.
			</p>{" "}
			
			<div className="text-main flex mt-12 justify-center items-center flex-col md:flex-row md:justify-around">
				<div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mb-5 md:mb-0 lg:px-8">
					<Image width="66" height="48" className="block mx-auto mb-10 md:h-12 w-[66px] h-[48px] " src={MailPic} alt="icône de mail" />
					<p className="font-bold text-black  mb-1 md:text-lg lg:text-xl">Adresse mail</p>
					<p className="md:text-lg text-black">stephanegamot@outlook.com</p>
				</div>

				<div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mn-5 md:mb-0 lg:px-8">
					<Image width="48" height="48" className="block mx-auto mb-10 md:h-12 w-[48px] h-[48px]" src={PhonePic} alt="icône de téléphone" />
					<p className="font-bold mb-1 md:text-lg lg:text-xl text-black">Numéro de téléphone</p>
					<p className="md:text-lg text-black">04 77 13 19 93</p>
				</div>
			</div>
		</section>
	);
}
