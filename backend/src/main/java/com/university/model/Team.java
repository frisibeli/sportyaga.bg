package com.university.model;

import java.util.List;

public class Team {
    private int teamId;
    private int teamSize;
    private boolean advanced;
    private String searchingFor;
    private String name;
    private String teamOwner;
    private List<Teammate> teammates;

    public int getTeamSize() {
        return teamSize;
    }

    public void setTeamSize(int teamSize) {
        this.teamSize = teamSize;
    }

    public boolean isAdvanced() {
        return advanced;
    }

    public void setAdvanced(boolean advanced) {
        this.advanced = advanced;
    }

    public String getSearchingFor() {
        return searchingFor;
    }

    public void setSearchingFor(String searchingFor) {
        this.searchingFor = searchingFor;
    }

    public String getTeamOwner() {
        return teamOwner;
    }

    public void setTeamOwner(String teamOwner) {
        this.teamOwner = teamOwner;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int id) {
        this.teamId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Teammate> getTeammates() {
        return teammates;
    }

    public void setTeammates(List<Teammate> teammates) {
        this.teammates = teammates;
    }
}
