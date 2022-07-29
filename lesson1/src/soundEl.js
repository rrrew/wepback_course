// import {Howl, Howler} from 'howler';

export function playBellSound() {
    const sound = new Howl({
        src: ["./sounds/sounds_bell-sound.mp3"],
        });
        Howler.volume(0.5);
    return sound.play();
    
}