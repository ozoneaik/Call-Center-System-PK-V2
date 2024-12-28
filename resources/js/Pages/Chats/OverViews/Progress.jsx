import { BoxTableHeader } from "@/Components/Tables/BoxTableHeader";
import { Button, Sheet, Table } from "@mui/joy";
import { useState } from "react"
import { ChatPageStyle } from "../../../../css/ChatPageStyle";
import ChatIcon from '@mui/icons-material/Chat';
import { CustDetail } from "@/Components/Tables/OverView";
import { FullDate, RealTime } from "@/Components/Times/Time";
import { TableBody, TableHead } from "@mui/material";
import { Link } from "@inertiajs/react";

export default function Progress({ list, user }) {
    const [progress, setProgress] = useState(list);
    return (
        <div>
            <BoxTableHeader totalList={list.length} user={user} />
            <Sheet variant="outlined" sx={ChatPageStyle.BoxSheet}>
                <Table
                    stickyHeader
                    hoverRow
                    sx={ChatPageStyle.Table}
                >
                    <TableHead>
                        <tr>
                        <th style={{ width: 400 }}>ชื่อลูกค้า</th>
                            <th style={{ width: 200 }}>พนักงานรับเรื่อง</th>
                            <th style={{ width: 200 }}>วันที่รับเรื่อง</th>
                            <th style={{ width: 200 }}>เวลาเรื่ม</th>
                            <th style={{ width: 200 }}>เวลาที่สนทนา</th>
                            <th style={{ width: 150 }}>จัดการ</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {progress && progress.length > 0 && progress.map((item, index) => (
                            <tr key={index}>
                                <td style={ChatPageStyle.TableText}>
                                    <CustDetail
                                        avatar={'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png'}
                                        RateId={index + 1}
                                        custName={item.name}
                                        description={'ทักมาจากไลน์ pumpkin'}
                                        message={'e'}
                                    />
                                </td>
                                <td style={ChatPageStyle.TableText}>{user.name}</td>
                                <td>
                                    <FullDate date={new Date()} />
                                </td>
                                <td style={ChatPageStyle.TableText}>
                                    <FullDate date={new Date()} color="success" />
                                </td>
                                <td style={ChatPageStyle.TableText}>
                                    <RealTime date={new Date()} color="warning" />
                                </td>
                                <td style={ChatPageStyle.TableText}>
                                    <Link href="/messages">
                                        <Button size='sm' color="primary" variant="outlined">
                                            <ChatIcon />
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </TableBody>
                </Table>
            </Sheet>
        </div>
    )
}