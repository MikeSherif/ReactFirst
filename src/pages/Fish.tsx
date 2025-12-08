import TextPressure from "../shared/ui/TextPressure.tsx";
import CurvedLoop from "../shared/ui/CurvedLoop.tsx";

const Fish = () => {
    return (
        <div>
            <div style={{position: 'relative', height: '300px'}}>
                <TextPressure
                    text="inskoy fish"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={36}
                />
            </div>
            <CurvedLoop
                marqueeText="Рыба ✦ с инских ✦ холмов ✦ уже✦ на ярмарке ✦"
                speed={3}
                curveAmount={500}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />
        </div>
    );
};

export default Fish;