"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bola =
/*#__PURE__*/
function () {
  function bola(x, y, r) {
    _classCallCheck(this, bola);

    var options = {
      'isStatic': false,
      'restitution': 0.3,
      'friction': 0,
      'density': 1.2
    };
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options);
    this.image = LoadImage("paper.png");
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
  }

  _createClass(bola, [{
    key: "display",
    value: function display() {
      var ppos = this.body.position;
      push();
      translate(ppos.x, ppos.y);
      rectMode(CENTER);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }]);

  return bola;
}();

;