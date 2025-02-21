import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="container mx-auto grid md:grid-cols-3 md:gap-10 gap-6">
                <div>
                    <h3 className="font-[900] text-base">Implenia Innovation Hub</h3>
                    <p className="mt-2">Thurgauerstrasse 101A</p>
                    <p>8152 Glattpark (Opfikon)</p>
                    <p>innovation@implenia.com</p>

                    <h3 className="font-bold mt-9">Implenia Kickbox</h3>
                    <p className="mt-2">
                        This revised version is based on Adobe Kickbox which is licensed under
                        the Creative Commons Attribution License.
                    </p>

                    <p className="mt-9">Data Protection | Imprint</p>
                </div>

                <div>
                    <h3 className="font-bold">Sitemap</h3>
                    <ul className="mt-2 space-y-1">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold">Contact</h3>
                    <form className="mt-4 max-w-[273px]">
                        <input
                            type="email"
                            placeholder="Ihre E-Mail"
                            className="w-full p-2 bg-white text-black mb-2 max-w-[189px] h-[50px]"
                        />
                        <textarea
                            placeholder="Ihre Nachricht..."
                            className="w-full p-2 bg-white text-black h-[121px]"
                        />
                        <button className="bg-red text-white flex ml-auto px-6 py-2">
                            SENDEN
                        </button>
                    </form>
                </div>
                <p className=" mt-1 text-sm">
                    Copyright © 2025 Implenia. Alle Rechte vorbehalten.
                </p>
            </div>


        </div>
    )
}

export default Footer