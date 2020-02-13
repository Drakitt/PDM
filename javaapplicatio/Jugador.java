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
public class Jugador {
    private String nombre;
    private String apellido;
    private String ci;
    private int edad;

    public Jugador(String nombreJugador, String apellidoJugador, String ciJugador, int edadJugador) {
        this.nombre = nombreJugador;
        this.apellido = apellidoJugador;
        this.ci = ciJugador;
        this.edad = edadJugador;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    public void imprimir(){
        System.out.println(this.nombre);
        System.out.println(this.apellido);
        System.out.println(this.ci);
        System.out.println(this.edad);
            
    }
    
}
