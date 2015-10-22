'use strict';

var assert = require('assert'),
    should = require('should'),
    bowlingGame = require('../../bowling/game');

describe('Bowling Game Kata', function() {
    it('game should exist', function() {
        should.exist(bowlingGame);
    });
});