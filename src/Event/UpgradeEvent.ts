/* Byteshift Harmony                                                               _         _             __   _ _____
 *    A component-based HTTP server micro-framework                               | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2020, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/             H A R M O N Y
 */
'use strict';

import {Session}            from '../Session/Session';
import {Request}            from '../Request/Request';
import {IRoute}             from '../Router/Router';
import {Socket}                   from 'net';

export class UpgradeEvent
{
    public constructor(
        public readonly request: Request,
        public readonly socket: Socket,
        public readonly session?: Session
    ) {
    }
}
