basic.forever(function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.pause(1000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(1000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(1000)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(1000)
})
