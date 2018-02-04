package com.university.model;


import java.util.Date;
import java.util.List;

public class Team {
    private String name;
    private String description;
    private int id;
    private int maxPlayers;
    private double longitude;
    private double latitude;
    private double distance;
    private List<User> players;

    private Date createdAt;
    private Date updatedAt;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(int maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public List<User> getPlayers() {
        return players;
    }

    public void setPlayers(List<User> players) {
        this.players = players;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "Team{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", id=" + id +
                ", maxPlayers=" + maxPlayers +
                ", longitude=" + longitude +
                ", latitude=" + latitude +
                ", distance=" + distance +
                ", players=" + players +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}

//name: {
//        type: 'string',
//        required: true
//        },
//        Sport:{
//        model: 'Sport'
//        },
//        maxPlayers:{
//        type: 'integer'
//        },
//        description:{
//        type: 'string'
//        },
//        players:{
//        collection: 'user',
//        via: 'teams'
//        }

//  email: {
//          type: 'string',
//          unique: true,
//          required: true
//          },
//          name: {
//          type: 'string',
//          required: true
//          },
//          password: {
//          type: 'string',
//          required: true,
//          defaultsTo: 'test'
//          },
//          teams:{
//          collection: 'team',
//          via: 'players',
//          dominant: true
//          }
//          }

//attributes: {
//        name: {
//        type: 'string',
//        required: true
//        },
//        description:{
//        type: 'string'
//        }
//        }