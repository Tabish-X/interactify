import "@/styles/globals.css"
import CreatePost from "@/UI/components/CreatePost";
import Header from "@/UI/header/Header";

export const metadata = {
    title: {
        template: "%s | interactify",
        default: "Interactify"
    },
    description: "Welcome to Interactify, where connections come alive! Elevate your social experience with personalized feeds, real-time collaboration, and privacy controls. Join us for a dynamic platform that adapts to your needs. Connect, engage, and discover a new era of meaningful interactions. Your voice matters at Interactify – where every connection is an opportunity for authentic engagement. Join today and redefine your social world!",
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className="font-Poppins bg-body-overlay relative z-[1] ">

                <Header />

                <div className="top-[4rem] left-0 position absolute w-full -z-[1] ">
                    <div className="">

                    </div>
                    {children}
                </div>

            </body>
        </html>
    );
}
