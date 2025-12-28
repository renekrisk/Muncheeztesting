import appStoreIcon from '../assets/app-store-icon.png';
import googlePlayIcon from '../assets/google-play-icon.png';

export default function AppDownload() {
    return (
        <section className="relative py-20 bg-[#00A082]" id="app-download">
            <div className="container relative z-20">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl font-heading font-light text-white mb-2">
                            Get the app
                        </h2>
                        <p className="text-sm text-white/80 font-light">
                            Available on iOS and Android
                        </p>
                    </div>

                    {/* App Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="transition-opacity hover:opacity-70">
                            <img src={appStoreIcon} alt="App Store" className="w-12 h-12" />
                        </a>
                        <a href="#" className="transition-opacity hover:opacity-70">
                            <img src={googlePlayIcon} alt="Google Play" className="w-12 h-12" />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Curve (Transition to Footer - Unique Black Curve, Reduced Space) */}
            <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-10">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] block" preserveAspectRatio="none">
                    <path fill="#000000" fillOpacity="1" d="M0,80L48,71C96,62,192,45,288,47C384,49,480,70,576,73C672,77,768,63,864,58C960,53,1056,57,1152,62C1248,67,1344,75,1392,78L1440,82L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>
        </section>
    );
}
