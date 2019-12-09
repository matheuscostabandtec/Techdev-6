const int sensorPin = A0; //PINO ANALÓGICO UTILIZADO PELO SENSOR

float temperatura = 0; //VARIÁVEL DO TIPO FLOAT

void setup(){

Serial.begin(9600); //INICIALIZAÇÃO DA SERIAL

}

void loop(){

temperatura = ((analogRead(sensorPin) * 0.0048828125 * 100)-23); //VARIÁVEL RECEBE A TEMPERATURA MEDIDA

//Serial.print("Temperatura = "); //IMPRIME O TEXTO NA SERIAL

Serial.println(temperatura); //IMPRIME NA SERIAL A TEMPERATURA MEDIDA

//Serial.println(" C"); //IMPRIME O TEXTO NA SERIAL

delay((2500)); //INTERVALO DE 5 SEGUNDOS (5000 MILISSEGUNDOS)

}
