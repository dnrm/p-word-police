const express = require('express');
const app = express();

const Discord = require('discord.js');
const client = new Discord.Client();
const possibleMessages = ["ugh please no", "one more and you get banned",
                         "nooo", "piece of shit", "I hope you step on a lego",
                          "go commit die :)", "Woah! Calm down satan.", 
                        "you are the human equivalent of a participation award", 
                        "Papers please...", "You are not allowed to say that", 
                        "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "retard", 
                        "REEEEEEEEEE", "maybe you are a monster...", "hahaha. You're not funny",
                        "That's what she said", "You're so ugly you made an onion cry"]

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', message => {
 if (message.content.includes("posne") || message.content.includes("Posne")) {
    message.channel.send(possibleMessages[Math.floor((Math.random() * possibleMessages.length))])
 }
 });

client.login(process.env.token);