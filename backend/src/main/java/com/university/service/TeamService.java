package com.university.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.university.model.Team;
import org.apache.commons.io.FileUtils;

import javax.jws.WebMethod;
import javax.jws.WebService;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@WebService
public class TeamService {
    private static final int NEAREST_TEAMS = 2;
    private ObjectMapper objectMapper = null;
    private List<Team> teams;

    @WebMethod
    public List<Team> findNearestTeam(double longitude, double latitude) {
        List<Team> nearestTeams = new ArrayList<>();
        int counter = 0;
        for (Team team : this.teams) {
            team.setDistance(calculateDistance(longitude, latitude, team.getLongitude(), team.getLatitude()));
        }
        this.teams.sort(Comparator.comparing(Team::getDistance));
        for (Team team : this.teams) {
            nearestTeams.add(team);
            counter++;
            if (counter >= NEAREST_TEAMS) {
                break;
            }
        }
        return nearestTeams;
    }

    private double calculateDistance(double longitude1, double latitude1, double longitude2, double latitude2) {
        double R = 6371;
        double dLat = deg2rad(latitude2 - latitude1);
        double dLon = deg2rad(longitude2 - longitude1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(latitude1)) * Math.cos(deg2rad(latitude2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double d = R / c;
        return d;
    }

    private double deg2rad(double deg) {
        return deg * (Math.PI / 180);
    }

    private void updateTeams() throws IOException {
        if (this.objectMapper == null) {
            this.objectMapper = new ObjectMapper();
        }
        String teamsJson = readTeamsFromDb();
        JsonNode node = this.objectMapper.readTree(teamsJson);
        JsonNode arrayNode = node.get("data").get("team");
        this.teams = new ArrayList<>();
        if (arrayNode.isArray()) {
            for (JsonNode teamNode : arrayNode) {
                Team team = this.objectMapper.convertValue(teamNode, Team.class);
                System.out.println(team);
                this.teams.add(team);
            }
        } else {
            Team team = this.objectMapper.convertValue(arrayNode, Team.class);
            this.teams.add(team);
        }
    }

    public String readTeamsFromDb() throws IOException {
        String content = FileUtils.readFileToString(new File("./api/.tmp/localDiskDb.db"), StandardCharsets.UTF_8);
        return content;
    }
}
