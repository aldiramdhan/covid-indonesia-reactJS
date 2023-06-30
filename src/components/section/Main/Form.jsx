import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import form from '../../../assets/images/form.svg'
import { useState } from "react";


export default function Form() {

    const TABLE_HEAD = ["No", "Provinsi", "Positif", "Sembuh", "Dirawat", "Meninggal"];

    const [data, setData] = useState([
        {
            provinsi: "Depok",
            positif: 0,
            sembuh: 0,
            dirawat: 0,
            meninggal: 0,
        },
    ]);

    // const [value, setValue] = useState();
    // console.log(value);
    // ["positif", "sembuh", "dirawat", "meninggal"

    const [provinsi, setProvinsi] = useState(null);
    const [jumlah, setJumlah] = useState(null);
    const [status, setStatus] = useState(null);

    const onChangeProvinsi = (event) => {
        setProvinsi(event.target.value);
    };

    const onChangeJumlah = (event) => {
        setJumlah(event.target.value);
    };

    const onChangeStatus = (e) => {
        // console.log(event.target.value);
        setStatus(e);
    }

    const onSubmit = (event) => {
        console.log("submitted");
        event.preventDefault();

        const isProvinsiExist = data.find((_data) => _data.provinsi === provinsi);

        if (isProvinsiExist) {
            const findIndexProvinsi = data.findIndex((_data) => _data.provinsi === provinsi);

            const updatedData = data.map((_data, index) => {
                if (index === findIndexProvinsi) {
                    return {
                        ..._data,
                        [status]: jumlah,
                    };
                } else {
                    return _data;
                }
            });

            console.log(updatedData);
            setData(updatedData);
        } else {
            setData((data) => [
                ...data,
                {
                    provinsi: provinsi,
                    [status]: jumlah,
                },
            ]);
        }
    };

    return (
        <>
            <section id="table">
                <div className="relative w-screen h-screen flex flex-col pt-0 sm:pt-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-4 pt-0 sm:pt-8 mb-10">
                            <Typography as="h2" className="text-5xl font-semibold text-primary-color">Provinsi</Typography>
                            <Typography as="p" className="text-lg font-semibold text-blue-400">Data Covid Berdasarkan Provinsi</Typography>
                        </div>
                        <Card className="lg:overflow-hidden sm:overflow-scroll md:overflow-scroll">
                            <table className="min-w-fit table-auto text-center">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map((_data, index) => (
                                        <tr key={_data.provinsi}>
                                            <td className="">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {index + 1}
                                                </Typography>
                                            </td>
                                            <td className={`bg-blue-gray-50/50`}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {_data?.provinsi ?? 0}
                                                </Typography>
                                            </td>
                                            <td className="">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {_data?.positif ?? 0}
                                                </Typography>
                                            </td>
                                            <td className="">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {_data?.sembuh ?? 0}
                                                </Typography>
                                            </td>
                                            <td className="">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {_data?.dirawat ?? 0}
                                                </Typography>
                                            </td>
                                            <td className="">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {_data?.meninggal ?? 0}
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </section>
            <section id="form">
                <div className="relative w-screen h-screen flex flex-col pt-32 bg-gray-50 overflow-hidden">
                    <div className=" w-full flex flex-col lg:flex-row">
                        {/* :HERO MAIN */}
                        {/* :HERO ILLUSTRATION */}
                        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                            <img src={form} alt="" className="w-2/5 lg:w-3/5" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col items-center text-gray-600"> {/* Container */}
                            {/* ::Hero Inner */}
                            <div className="p-5 flex flex-col justify-center items-center lg:items-start text-start lg:text-left">
                                <Card color="transparent" shadow={false}>
                                    <Typography variant="h1" className="text-primary-color">
                                        Form Covid
                                    </Typography>

                                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
                                        <div className="mb-1 flex flex-col gap-4">

                                            <label htmlFor="provinsi">
                                                <Typography color="blue-gray" className="ms-1 font-normal">
                                                    Provinsi
                                                </Typography>
                                            </label>
                                            <Input size="lg" label="Ketik Provinsi" name="provinsi" onChange={onChangeProvinsi} />

                                            <label htmlFor="status">
                                                <Typography color="blue-gray" className="ms-1 font-normal">
                                                    Status
                                                </Typography>
                                            </label>

                                            <Select defaultValue="positif" label="Pilih Status" name="status" onChange={onChangeStatus} >
                                                <Option value="positif">Positif</Option>
                                                <Option value="sembuh">Sembuh</Option>
                                                <Option value="dirawat">Dirawat</Option>
                                                <Option value="meninggal">Meninggal</Option>
                                            </Select>

                                            <label htmlFor="jumlah">
                                                <Typography color="blue-gray" className="ms-1 font-normal">
                                                    Jumlah
                                                </Typography>
                                            </label>

                                            <Input size="lg" label="Ketik Jumlah" name="jumlah" onChange={onChangeJumlah} />
                                        </div>
                                        <Button className="bg-primary-color mt-6" fullWidth type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}