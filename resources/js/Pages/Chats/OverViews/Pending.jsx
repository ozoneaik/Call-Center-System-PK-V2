import { BoxTableHeader } from "@/Components/Tables/BoxTableHeader";
import { Sheet, Table } from "@mui/joy";
import { useState } from "react"
import { ChatPageStyle } from "../../../../css/ChatPageStyle";

export default function Pending({ list, user }) {
    const [pending, setPending] = useState(list);
    return (
        <div>
            <h1>Pending</h1>
            <BoxTableHeader totalList={list.length} user={user} />
            <Sheet sx={ChatPageStyle.BoxSheet} variant="outlined">
                <Table
                    stickyHeader
                    hoverRow
                    sx={ChatPageStyle.Table}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>ชื่อลูกค้า</th>
                            <th style={{ width: 150 }}>เมื่อ</th>
                            <th style={{ width: 150 }}>ผ่านมาแล้ว</th>
                            <th style={{ width: 150 }}>จากห้องแชท</th>
                            <th style={{ width: 150 }}>จากพนักงาน</th>
                            <th style={{ width: 150 }}>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pending && pending.length > 0 && pending.map((item, index) => (
                            <tr key={index}>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </div>
    )
}