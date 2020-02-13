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
public class Equipo {
    private String nombre;
    private String categoria;
    private Jugador[] jugadores;

    public Equipo(String nombreEquipo, String categoriaEquipo, Jugador[] jugadoresEquipo) {
        this.nombre = nombreEquipo;
        this.categoria = categoriaEquipo;
        this.jugadores = jugadoresEquipo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Jugador[] getJugadores() {
        return jugadores;
    }

    public void setJugadores(Jugador[] jugadores) {
        this.jugadores = jugadores;
    }
    public void imprimir(){
        System.out.println(this.categoria);
        System.out.println(this.nombre);
        
        System.out.println();
            for (int i = 0; i < this.jugadores.length; i++){
                this.jugadores[i].imprimir();
                        System.out.println();

            }
            System.out.println();

    }
}
