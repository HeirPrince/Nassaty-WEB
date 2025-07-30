import { kmis, check, curve1, curve2, analytics, shield, key, qr, usermgmt, access, mobile, building } from "../assets/";
import Button from "../components/Button";
import Section from "../components/Section";

const collabContent = [
    {
        title: "Centralized Key Management",
        text: "KMIS keeps track of key inventory and availability in the Key Room, providing a centralized solution for managing keys.",
    },
    { title: "Enhanced Access Control" },
    { title: "Reporting and Analytics" },
];

const collabApps = [
    {
        title: "Key Tracking",
        icon: key,
        width: 32,
        height: 32,
    },
    {
        title: "Security Control",
        icon: shield,
        width: 34,
        height: 36,
    },
    {
        title: "QR Scanner",
        icon: qr,
        width: 36,
        height: 28,
    },
    {
        title: "User Management",
        icon: usermgmt,
        width: 34,
        height: 35,
    },
    {
        title: "Access Control",
        icon: access,
        width: 34,
        height: 34,
    },
    {
        title: "Mobile App",
        icon: mobile,
        width: 34,
        height: 34,
    },
    {
        title: "Building Security",
        icon: building,
        width: 26,
        height: 34,
    },
    {
        title: "Analytics",
        icon: analytics,
        width: 38,
        height: 32,
    },
];

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">KMIS</h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item, i) => (
                            <li className="mb-3 py-3" key={i}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                            </li>
                        ))}
                    </ul>

                    <Button>
                        Try it now
                    </Button>

                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">KMIS is a centralized key management system that allows you to manage your keys in one place.</p>

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <img src={kmis} width={48} height={48} alt="KMIS" />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={index}
                                    className={`group absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-white/15 rounded-xl -rotate-${index * 45} group-hover:scale-110 transition-transform duration-200`}
                                    >
                                        <img className="m-auto" width={app.width} height={app.height} alt={app.title} src={app.icon} />
                                        {/* Tooltip */}
                                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {app.title}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                            <img src={curve1} width={522} height={182} alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                            <img src={curve2} width={162} height={76} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
