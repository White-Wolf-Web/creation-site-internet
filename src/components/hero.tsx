import React from 'react'
import Image from "next/image";
import WebDevAtWork from "../../public/webDevAtWork.jpg"

export default function Hero() {
  return (
    <section className="flex-col mt-10 max-w-[1280px] mx-auto md:flex md:flex-row">
    <div className="md:w-1/2 m-2 p-4">
    <p className=" text-center">Bonjour, je suis	<strong> Stéphane Gamot</strong></p>
        <p><strong>Web développeur Full-Stack orienté Front-end =&gt; React – Next.js.</strong></p>
<p>En tant que développeur web diplômé & expérimenté, je mets à votre service mes compétences pour concrétiser vos projets internet.</p>
<p>Les sites internet que je créé suis entièrement personnalisé et uniques. Je me déplace sur Bruxelles, Halle, Mons, Gand, Liège et Namur.
</p>
    </div>
    <div className="md:flex md:w-1/2 md:justify-center" >
        <Image src={WebDevAtWork} alt="Web-develppeur au travail derriere son écran"  width={500} height={280} className="w-full" />
    </div>
</section>
  )
}
