import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Controls } from '../enums/controls';
import { PongGame } from '../classes/pong-game';
import { Boundaries } from '../classes/boundaries';
import { ControlState } from '../classes/control-state';

@Component({
  selector: 'app-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss']
})
export class PongGameComponent implements OnInit {
  @ViewChild('PongCanvas', { static: true }) canvasElement: ElementRef;

  public width = 800;
  public height = 600;
  public item$;

  private context: CanvasRenderingContext2D;
  private pongGame: PongGame;
  private ticksPerSecond = 60;

  public controlState: ControlState;
  public enemyControlState: ControlState;

  constructor(private afDatabase: AngularFireDatabase) {
    this.pongGame = new PongGame(this.height, this.width);
    this.controlState = { upPressed: false, downPressed: false };
  }

  ngOnInit() {
    this.context = this.canvasElement.nativeElement.getContext('2d');
    this.renderFrame();

    // Game model ticks 60 times per second. Doing this keeps same game speed
    // on higher FPS environments.

    setInterval(
      () => this.pongGame.tick(this.controlState, this.enemyControlState),
      1 / this.ticksPerSecond
    );
  }

  renderFrame(): void {
    // Only run if game still going
    if (this.pongGame.gameOver()) {
      this.context.font = '30px Arial';
      this.context.fillText('Game Over!', 50, 50);

      return;
    }

    // Draw background
    this.context.fillStyle = 'rgb(0,0,0)';
    this.context.fillRect(0, 0, this.width, this.height);

    // Set to white for game objects
    this.context.fillStyle = 'rgb(255,255,255)';

    let bounds: Boundaries;

    // Draw player paddle
    const paddleObj = this.pongGame.playerPaddle;
    bounds = paddleObj.getCollisionBoundaries();
    this.context.fillRect(
      bounds.left,
      bounds.top,
      paddleObj.getWidth(),
      paddleObj.getHeight()
    );

    // Draw enemy paddle
    const enemyObj = this.pongGame.enemyPaddle;
    bounds = enemyObj.getCollisionBoundaries();
    this.context.fillRect(
      bounds.left,
      bounds.top,
      enemyObj.getWidth(),
      enemyObj.getHeight()
    );

    // Draw ball
    const ballObj = this.pongGame.ball;
    bounds = ballObj.getCollisionBoundaries();
    this.context.fillRect(
      bounds.left,
      bounds.top,
      ballObj.getWidth(),
      ballObj.getHeight()
    );

    // Render next frame
    window.requestAnimationFrame(() => this.renderFrame());
  }

  @HostListener('window:keydown', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.controlState.upPressed = true;
    }

    if (event.key === 'ArrowDown') {
      this.controlState.downPressed = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.controlState.upPressed = false;
    }
    if (event.key === 'ArrowDown') {
      this.controlState.downPressed = false;
    }
  }
}
