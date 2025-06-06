radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Würfeln()
    radio.sendNumber(zufall)
})
function Würfeln () {
    zufall = randint(1, 3)
}
let zufall = 0
radio.setFrequencyBand(20)
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
	
})
