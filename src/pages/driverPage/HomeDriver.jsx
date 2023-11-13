import DriverPorfile from "./driverHomePageElement/DriverPorfile";
import DecorateDriver from "./driverHomePageElement/DecorateDriver";
import StartDrive from "./driverHomePageElement/StartDrive";
import ChatForDriver from "./driverHomePageElement/ChatForDriver";
import Footer from "./driverHomePageElement/Footer";
export default function HomeDriver() {
    return (
        <div className="flex flex-col m-auto items-center justify-center h-screen w-screen gap-2">
            <DriverPorfile />
            <DecorateDriver />
            <div>
                <StartDrive />
                <ChatForDriver />
            </div>
            <Footer />
        </div>
    );
}
