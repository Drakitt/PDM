/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplicatio;

/**
 *
 * @author CC1
 */
public class JavaApplicatio {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      
       Jugador jugador = new Jugador("Mike","Wasowski","6765432",23);
       Jugador jugador2 = new Jugador("Noel","Sullivan","546534",25);
       Jugador jugador3 = new Jugador("Sully","Smith","6756472",24);
       Jugador jugador4 = new Jugador("Rodrigo","Condori","7856423",24);
       Jugador[] jugadores = new Jugador[4];
       jugadores[0]=jugador;
       jugadores[1]=jugador2;
       jugadores[2]=jugador3;
       jugadores[3]=jugador4;
       
       
       Equipo equipo = new Equipo("Liebres","Varones",jugadores);
       Equipo[] equipos = new Equipo[1];
       equipos[0]=equipo;
       Campeonato campeonato = new Campeonato("Campeonato Moles",equipos);
       campeonato.imprimir();
       
// TODO code application logic here
    }
    
    
    
}
