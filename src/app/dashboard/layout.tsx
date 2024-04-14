import Navbar from "@/components/common/Navbar";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col gap-10">
            <Navbar />
            <div className="max-w-[90rem] px-4 mx-auto min-w-[80rem]">{children}</div>
        </div>
    );
};

export default layout;
