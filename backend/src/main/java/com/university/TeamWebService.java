//package com.university;
//
//
//import com.university.model.Team;
//import com.university.service.TeamService;
//
//import java.io.IOException;
//import java.util.List;
//
//public class TeamWebService {
//    public static void main(String[] args) {
//        TeamService teamService = new TeamService();
//        try {
//            teamService.updateTeams();
//            List<Team> teams = teamService.findNearestTeam(20, 30);
//            for (Team team : teams) {
//                System.out.println(team);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}
