package com.university.controller;

import java.io.IOException;

import com.university.model.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.university.model.Sport;
import com.university.service.ResourceService;

@RestController
@RequestMapping("/resources")
public class ResourceController {
    private final ResourceService resourceService;

    @Autowired
    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/sports")
    public ResponseEntity<?> getAllSports() throws IOException {
        return new ResponseEntity<>(resourceService.getAllSports(), HttpStatus.OK);
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/teams/{sport}")
    public ResponseEntity<?> getAllTeams(@RequestParam(value = "sport") String sport) throws IOException {
        return new ResponseEntity<>(resourceService.getAllTeamsBySport(sport), HttpStatus.OK);
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/teams/{username}")
    public ResponseEntity<?> getTeamsByUser(@RequestParam(value = "username") String username) throws IOException {
        return new ResponseEntity<>(resourceService.getTeamsByUser(username), HttpStatus.OK);
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/sports/multimedia/{sport}")
    public ResponseEntity<?> getMultimediaBySport(@RequestParam(value = "sport") String sport) throws IOException {
        return new ResponseEntity<>(resourceService.getMultimediaBySport(sport), HttpStatus.OK);
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.POST, value = "/sports/add")
    public ResponseEntity<?> addNewSport(@RequestBody Sport sport) {
        resourceService.addNewSport(sport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(produces = "application/json", method = RequestMethod.POST, value = "/teams/create")
    public ResponseEntity<?> createNewTeam(@RequestBody Team team) {
        resourceService.createTeam(team);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
