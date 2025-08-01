interface Props {
    num: number,
    point: string,
    desc: string
}

function WorkPointCard({num, point, desc} : Props) {
    return (
        <div className={`bg-[#F4F8FB60] px-6 py-4 rounded-lg flex flex-col gap-2`}>
            <div className={`flex flex-row items-center gap-3`}>
                <div className={`min-w-8 min-h-8 w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-white text-md font-bold`}>
                    {num}
                </div>
                <span className={`text-primary text-lg font-bold line leading-none`}>{point}</span>
            </div>
            <p className={`text-white text-md`}>
                {desc}
            </p>
        </div>
    ) 
}

export default WorkPointCard