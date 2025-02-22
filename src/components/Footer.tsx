import React from 'react'
import CustomButton from './common/CustomButton';
import { FOOTER_LIST } from '@/utils/helper';
import Link from 'next/link';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div id='contact' className="bg-black text-white lg:pt-[130px] md:pb-[65px] md:pt-20 py-12">
            <div className="container mx-auto grid md:grid-cols-3 md:gap-10 gap-6">
                <div>
                    <h3 className="font-[900] text-base">Implenia Innovation Hub</h3>
                    <p>Thurgauerstrasse 101A</p>
                    <p>8152 Glattpark (Opfikon)</p>
                    <p>innovation@implenia.com</p>

                    <h3 className="font-[900] mt-9">Implenia Kickbox</h3>
                    <p>
                        This revised version is based on Adobe Kickbox which is licensed under
                        the Creative Commons Attribution License.
                    </p>

                    <p className="mt-9">Data Protection | Imprint</p>
                </div>

                <div>
                    <h3 className="font-[900]">Sitemap</h3>
                    <ul className="mt-4 text-base">
                        {FOOTER_LIST.map((item) => (
                            <li key={item.link} id={item.link}>
                                <Link href={item.link}> {item.label}</Link>

                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-[900]">Contact</h3>
                    <form className="mt-4 max-w-[273px]">
                        <input
                            type="email"
                            placeholder="Ihre E-Mail"
                            className="w-full p-2 bg-white text-black placeholder:text-black font-light mb-2 max-w-[189px] h-[50px] outline-none"
                        />
                        <textarea
                            placeholder="Ihre Nachricht..."
                            className="w-full p-2 pt-[18px] bg-white text-black placeholder:text-black font-light h-[121px] outline-none"
                        />
                        <CustomButton text='SENDEN' myClass='!rounded-none flex ml-auto hover:!text-black !px-[17px] bg-red text-white !items-center !text-sm !py-[5px]'/>
                    </form>
                </div>
                <p className=" mt-1 text-custom-xsm">
                    Copyright © {year} Implenia. Alle Rechte vorbehalten.
                </p>
            </div>


        </div>
    )
}

export default Footer