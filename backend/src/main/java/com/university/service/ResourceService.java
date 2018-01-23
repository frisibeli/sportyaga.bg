package com.university.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.university.model.Multimedia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.model.Sport;
import com.university.model.Team;
import com.university.util.SportData;

@Service
public class ResourceService {

    private final ObjectMapper objectMapper;
    private List<Sport> currentSports = null;
    private List<Team> currentTeams = null;
    private List<Team> userTeams = null;
    private List<Multimedia> currentMultimedia = null;

    @Autowired
    public ResourceService() {
        this.objectMapper = new ObjectMapper();
    }

    public List<Sport> getAllSports() throws IOException {
        if (this.currentSports == null) {
            Sport[] tempSports = objectMapper.readValue(SportData.SPORTS, new TypeReference<Sport[]>() {
            });
            this.currentSports = Arrays.asList(tempSports);
        }
        return this.currentSports;
    }

    public void addNewSport(Sport sport) {
        this.currentSports.add(sport);
    }

    public void createTeam(Team team) {
        this.currentTeams.add(team);
    }

    public List<Team> getAllTeamsBySport(String sport) throws IOException {
        if (this.currentTeams == null) {
            Team[] tempTeams = objectMapper.readValue(SportData.TEAMS, new TypeReference<Team[]>() {
            });
            this.currentTeams = Arrays.asList(tempTeams);
        }
        return this.currentTeams;
    }

    public List<Team> getTeamsByUser(String username) throws IOException {
        if (this.currentTeams == null) {
            Team[] tempTeams = objectMapper.readValue(SportData.TEAMS, new TypeReference<Team[]>() {
            });
            this.currentTeams = Arrays.asList(tempTeams);
            this.userTeams = new ArrayList<>();
            this.userTeams.add(this.currentTeams.get(0));
            this.userTeams.add(this.currentTeams.get(1));
            this.userTeams.add(this.currentTeams.get(2));
        }
        return this.userTeams;
    }

    public void joinTeam(Team team) {
        this.userTeams.add(team);
    }

    public void leaveTeam(int teamId) {
        for (Team team : this.userTeams) {
            if (teamId == team.getTeamId()) {
                this.userTeams.remove(team);
                break;
            }
        }
    }

    public Multimedia getMultimediaBySport(String sport) throws IOException {
        if (this.currentMultimedia == null) {
            Multimedia[] tmpMultimedia = objectMapper.readValue(SportData.MULTIMEDIA, new TypeReference<Multimedia[]>() {
            });
            this.currentMultimedia = Arrays.asList(tmpMultimedia);
        }
        Multimedia sportMultimedia = this.currentMultimedia.get(0);
        for (Multimedia multimedia : this.currentMultimedia) {
            if (multimedia.getName().equals(sport)) {
                sportMultimedia = multimedia;
                break;
            }
        }
        return sportMultimedia;
    }
}
