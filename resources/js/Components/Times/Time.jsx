import { Chip } from "@mui/joy";

export const RealTime = ({ date,color='neutral' }) => {
    const now = new Date();
    const targetDate = new Date(date);

    // คำนวณความแตกต่างในหน่วยมิลลิวินาที
    const diff = Math.abs(now - targetDate);

    // แปลงความแตกต่างเป็นหน่วยต่าง ๆ
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // ผลลัพธ์ในรูปแบบ "0 วัน 0 ชั่วโมง 0 นาที 0 วินาที"
    const result = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;

    return (
        <Chip color={color} variant="solid">{result}</Chip>
    );
};

export const FullDate = ({ date,color='neutral' }) => {
    const targetDate = new Date(date);

    const day = targetDate.getDate();
    const month = targetDate.getMonth() + 1;
    const year = targetDate.getFullYear();
    const hour = targetDate.getHours();
    const minute = targetDate.getMinutes();
    const second = targetDate.getSeconds();

    return (
        <Chip color={color} variant="solid">{`${day}/${month}/${year} ${hour}:${minute}:${second}`}</Chip>
    );
}
