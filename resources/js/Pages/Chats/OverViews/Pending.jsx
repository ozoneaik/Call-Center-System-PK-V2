import { BoxTableHeader } from "@/Components/Tables/BoxTableHeader";
import { Button, Sheet, Table } from "@mui/joy";
import { useState } from "react"
import { ChatPageStyle } from "../../../../css/ChatPageStyle";
import ChatIcon from '@mui/icons-material/Chat';
import { CustDetail } from "@/Components/Tables/OverView";
import { FullDate, RealTime } from "@/Components/Times/Time";

export default function Pending({ list, user }) {
    const [pending, setPending] = useState(list);
    return (
        <div>
            <BoxTableHeader totalList={list.length} user={user} />
            <Sheet variant="outlined" sx={ChatPageStyle.BoxSheet}>
                <Table
                    stickyHeader
                    hoverRow
                    sx={ChatPageStyle.Table}
                >
                    <thead>
                        <tr>
                            <th>ชื่อลูกค้า</th>
                            <th>พนักงานรับเรื่อง</th>
                            <th>วันที่รับเรื่อง</th>
                            <th>เวลาเรื่ม</th>
                            <th>เวลาที่สนทนา</th>
                            <th>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pending && pending.length > 0 && pending.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <CustDetail
                                        avatar={'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png'}
                                        RateId={index + 1}
                                        custName={item.name}
                                        description={'ทักมาจากไลน์ pumpkin'}
                                        message={'hello world'}
                                    />
                                </td>
                                <td>{user.name}</td>
                                <td>
                                    <FullDate date={new Date()} />
                                </td>
                                <td>
                                    <FullDate date={new Date()} color="success" />
                                </td>
                                <td>
                                    <RealTime date={new Date()} color="warning"/>
                                </td>
                                <td>
                                    <Button size='sm' color="primary" variant="outlined">
                                        <ChatIcon />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </div>
    )
}