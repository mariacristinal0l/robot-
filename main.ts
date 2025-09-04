let motor2Speed = 0
let motor1Speed = 0
let received = ""
// Configura el grupo de radio
radio.setGroup(1)
basic.forever(function () {
    received = radio.receiveString()
    if (received == "adelante") {
        motor1Speed = 255
        motor2Speed = 255
    } else if (received == "atras") {
        motor1Speed = -255
        motor2Speed = -255
    } else if (received == "detener") {
        motor1Speed = 0
        motor2Speed = 0
    } else if (received == "agitar") {
        // Realizar el movimiento de agitación
        for (let index = 0; index < 5; index++) {
            // Mover hacia adelante
            motor1Speed = 255
            motor2Speed = 255
            // Mantener el movimiento hacia adelante por 200 ms
            basic.pause(200)
            // Detener
            motor1Speed = 0
            motor2Speed = 0
            // Detener por 100 ms
            basic.pause(100)
            // Mover hacia atrás
            motor1Speed = -255
            motor2Speed = -255
            // Mantener el movimiento hacia atrás por 200 ms
            basic.pause(200)
            // Detener
            motor1Speed = 0
            motor2Speed = 0
            // Detener por 100 ms
            basic.pause(100)
        }
    }
    // Control de motores
    if (motor1Speed > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, motor1Speed)
    } else if (motor1Speed < 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.analogWritePin(AnalogPin.P2, 0 - motor1Speed)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (motor2Speed > 0) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.analogWritePin(AnalogPin.P5, motor2Speed)
    } else if (motor2Speed < 0) {
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.analogWritePin(AnalogPin.P5, 0 - motor2Speed)
    } else {
        pins.analogWritePin(AnalogPin.P5, 0)
    }
})
