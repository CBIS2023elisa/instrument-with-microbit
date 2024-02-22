basic.forever(function () {
    music.setTempo(100)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    if (input.lightLevel() < 80) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 100), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
    } else if ((0 as any) < (120 as any)) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 100), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    } else if (input.isGesture(Gesture.Shake)) {
        music.changeTempoBy(5)
    }
})
