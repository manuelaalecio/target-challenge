1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

A RESPOSTA É 91

Explicação

k = 0 + 1
k = 1

soma = 0 + 1
-------------------------
k = 1 + 1
k = 2

soma = 1 + 2
soma = 3
-------------------------
k = 2 + 1
k = 3

soma = 3 + 3
soma = 6
-------------------------
k = 3 + 1
k = 4

soma = 6 + 4
soma = 10
------------------------
k = 4 + 1
k = 5

soma = 10 + 5
soma = 15
------------------------
k = 5 + 1
k = 6

soma = 15 + 6
soma = 21
------------------------
k = 6 + 1
k = 7

soma = 21 + 7
soma = 28
------------------------
k = 7 + 1
k = 8

soma = 28 + 8
soma = 36
------------------------
k = 8 + 1
k = 9

soma = 36 + 9
soma = 45
------------------------
k = 9 + 1
k = 10

soma = 45 + 10
soma = 55
------------------------
k = 10 + 1
k = 11

soma = 55 + 11
soma = 66
-----------------------
k = 11 + 1
k = 12

soma = 66 + 12
soma = 78
-----------------------
k = 12 + 1
k = 13

soma = 78 + 13
soma = 91