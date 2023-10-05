import Image from "next/image"

// interface EmptyProps {
//     label: string;
// }

export const Empty = ({
    // label
}) => {
    return (
        <div className="h-full p-10 flex flex-col items-center justify-center">
            <div className="relative h-72 w-92">
                <h1 className="text-lg font-medium text-black text-opacity-50">There's nothing here, ask me something!</h1>
            </div>
        </div>
    )
}