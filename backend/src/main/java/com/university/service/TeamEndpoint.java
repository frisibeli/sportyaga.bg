package com.university.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class TeamEndpoint {
    private static final String NAMESPACE_URI = "http://spring.io/guides/gs-producing-web-service";

    private final TeamRepository teamRepository;

    @Autowired
    public TeamEndpoint(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "findNearestTeamRequest")
    @ResponsePayload
    public FindNeareastTeamResponse findNeareastTeam(@RequestPayload FindNeareastTeam request) {
        FindNeareastTeamResponse response = new FindNeareastTeamResponse();
        response.setTeam(teamRepository.findNearestTeam(request.getLongitude()), request.getLatitude());
        return response;
    }
}
