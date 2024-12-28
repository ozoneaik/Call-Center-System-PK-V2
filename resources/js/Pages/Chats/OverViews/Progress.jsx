import { BoxTableHeader } from "@/Components/Tables/BoxTableHeader";
import { useState } from "react";

export default function Progress({list,user}) {
    const [progress, setProgress] = useState(list);
    return (
        <div>
            <h1>Progress</h1>
            <BoxTableHeader totalList={list.length} user={user}/>
            {progress && progress.length > 0 && progress.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}