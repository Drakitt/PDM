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
public class Campeonato {
    private String nombreCampeonato;
    private Equipo[] equipos;

    public Campeonato(String nombreCampeonato, Equipo[] equipos) {
        this.nombreCampeonato = nombreCampeonato;
        this.equipos = equipos;
    }

    public String getNombreCampeonato() {
        return nombreCampeonato;
    }

    public void setNombreCampeonato(String nombreCampeonato) {
        this.nombreCampeonato = nombreCampeonato;
    }

    public Equipo[] getEquipos() {
        return equipos;
    }

    public void setEquipos(Equipo[] equipos) {
        this.equipos = equipos;
    }
     public void imprimir(){
        System.out.print(this.nombreCampeonato);
        
        System.out.println();
            for (int i = 0; i < this.equipos.length; i++){
                this.equipos[i].imprimir();
                System.out.println();

            }
    }
}

