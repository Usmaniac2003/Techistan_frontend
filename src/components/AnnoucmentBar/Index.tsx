import Typography from "@/general/Typography/Typography";

export default function AnnoucmentBar({Message}){
    return <div className="AnnoucmentBar bg-black px-2 p-4 text-center">
    <Typography fontSize={"xsm"} className="text-white">{Message}</Typography>
    </div>
}