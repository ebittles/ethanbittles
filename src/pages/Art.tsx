import Typewriter from 'typewriter-effect';

export function Art() {

    const sentence1 = "My art is still a work in progress \u{1F605}";
    const sentence2 = "My roomates art is \u{1F525}"
    
    return (
        <div>
            <h1>Art</h1>
            <Typewriter
            options={{
                delay: 25,
            }}
            onInit={(typewriter) => {
                typewriter
                .typeString(sentence1)
                .typeString("<h1> BUT <h1/>")
                .typeString(sentence2)
                .start();
            }}
            />
        </div>
    );
}