package com.university.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.io.IOException;
import java.util.List;

@Endpoint
public class TeamEndpoint {
    private static final String NAMESPACE_URI = "http://service.university.com";

    private final TeamRepository teamRepository;

    @Autowired
    public TeamEndpoint(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "findNearestTeam")
    @ResponsePayload
    public FindNearestTeamResponse findNeareastTeam(@RequestPayload FindNearestTeam request) throws IOException {
        FindNearestTeamResponse response = new FindNearestTeamResponse();
        List<Team> teamList = teamRepository.findNearestTeam(request.getLongitude(), request.getLatitude());
        response.teams = teamList;
        return response;
    }
}
