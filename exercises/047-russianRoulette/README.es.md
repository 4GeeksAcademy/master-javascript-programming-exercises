# `047` Russian Roulette

¿Alguna vez has jugado a la Ruleta Rusa? ¡Es muy divertido! Si logras sobrevivir... (muajajajajaja).

El revólver sólo tiene 6 récamaras para balas. Tú insertas una bala en uno de las recámaras, y giras las recámaras del revólver para hacer el juego aleatorio. Nadie sabe la posición de la bala ¡¡¡FUEGO!!!....... ¿has muerto?

## 📝 Instrucciones:

El juego casi está funcionando.

1. Completa la función `fireGun()` para que el juego funcione. Debes comparar la posición de la bala contra la posición de la recámara.

## 💡 Pistas:

+ Si la posición de la bala `firePosition` coincide con la posición de la recámara dada por la función `spinChamber`, la función `fireGun()` debe devolver `You're dead!`.

+ Si la posición de la bala `firePosition` no coincide con la posición de la recámara dada por la función `spinChamber`, la función `fireGun()` debe devolver `Keep playing!`.

+ La función `spinChamber` retorna un número entero aleatorio entre 1 y 6.
