import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";


export default function Example() {

    const cardList = (
        <div className="flex flex-col lg:flex-row gap-5 justify-center mb-60">
            <Card className="my-5 w-84">
                <CardBody className="my-11">
                    <Typography variant="h5" color="blue-gray" className="text-2xl mb-2">
                        Confirmed
                    </Typography>
                    <Typography className="text-5xl text-primary-color">
                        605.646
                    </Typography>
                </CardBody>
            </Card>
            <Card className="my-5 w-84">
                <CardBody className="my-11 mx-5">
                    <Typography variant="h5" color="blue-gray" className="text-2xl mb-2">
                        Recovered
                    </Typography>
                    <Typography className="text-5xl text-blue-700">
                        90.000
                    </Typography>
                </CardBody>
            </Card>
            <Card className="my-5 w-84">
                <CardBody className="my-11 mx-8">
                    <Typography variant="h5" color="blue-gray" className="text-2xl mb-2">
                        Death
                    </Typography>
                    <Typography className="text-5xl text-red-400">
                        5.000
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )



    return (
        <section id="stats" className="mb-96 sm:mb-0">
            <div className="relative w-full h-full flex flex-col pt-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-4 py-10">
                        <Typography as="h2" className="text-5xl font-semibold text-primary-color">Indonesia</Typography>
                        <Typography as="p" className="text-lg font-semibold text-blue-400">Data terkini mengenai perkembangan Covid-19 di Indonesia</Typography>
                    </div>
                    {cardList}
                </div>
            </div>
        </section>
    )
}