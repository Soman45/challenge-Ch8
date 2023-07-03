//GET ALL PLAYER DATA
/**
 * @swagger
 * /api/v1/players:
 *   get:
 *     summary: Get semua data player
 *     description: Mengambil semua data player dari Database
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       username:
 *                          type: string
 *                          description : Username player
 *                          example: Budi123 
 *                       email:
 *                          type: string
 *                          description : Email player
 *                          example: Budi@gmail.com
 *                       password:
 *                          type: string
 *                          description : Password player
 *                          example: Budi123
 *                       experience:
 *                          type: integer
 *                          description : Experience yang dikumpulkan player
 *                          example: 3000 
 *                       level:
 *                          type: integer
 *                          description : Level player
 *                          example: 20 
 * 
 */

//GET PLAYER BY ID
/**
 * @swagger
 * /api/v1/players/{id}:
 *   get:
 *     summary: Get player by ID
 *     description: Get player berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Player ID
 *     responses:
 *       200:
 *         description: Successful retrieval
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: Player ID
 *                     username:
 *                       type: string
 *                       description: Username of the player
 *                     email:
 *                       type: string
 *                       description: Email of the player
 *                     password:
 *                          type: string
 *                          description : Password player
 *                     experience:
 *                       type: integer
 *                       description: Experience of the player
 *                     level:
 *                       type: integer
 *                       description: Level of the player
 */

//CREATE NEW PLAYER
/**
 * @swagger
 * /api/v1/players:
 *    post:
 *      summary: API ini digunakan untuk menambahkan data player
 *      description: API ini digunakan untuk menambahkan data player dalam format JSON
 *      requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                       username:
 *                          type: string
 *                          description : Username player
 *                          example: Budi123 
 *                       password:
 *                          type: string
 *                          description : Password player
 *                          example: Budi123 
 *                       email:
 *                          type: string
 *                          description : Email player
 *                          example: Budi@gmail.com
 *                       experience:
 *                          type: integer
 *                          description : Experience yang dikumpulkan player
 *                          example: 3000 
 *                       level:
 *                          type: integer
 *                          description : Level player
 *                          example: 20 
 *                         
 *      responses:
 *        200:
 *          description: Sukses menambah Player.
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                          username:
 *                              type: string
 *                              description : Username player
 *                              example: Budi123 
 *                          password:
 *                              type: string
 *                              description : Password player
 *                              example: Budi123 
 *                          email:
 *                              type: string
 *                              description : Email player
 *                              example: Budi@gmail.com
 *                          experience:
 *                              type: integer
 *                              description : Experience yang dikumpulkan player
 *                              example: 3000 
 *                          level:
 *                              type: integer
 *                              description : Level player
 *                              example: 20 
 */                                    

//UPDATE PLAYER
/**
 * @swagger
 * /api/v1/players/{id}:
 *   put:
 *     summary: Update data player 
 *     description: Update data player berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Player ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Updated username of the player
 *                 example: Budi123
 *               email:
 *                 type: string
 *                 description: Updated email of the player
 *                 example: Budi@gmail.com
 *               password:
 *                 type: string
 *                 description: Updated password of the player
 *                 example: Budi123
 *               experience:
 *                 type: integer
 *                 description: Updated experience of the player
 *                 example: 3500
 *               level:
 *                 type: integer
 *                 description: Updated level of the player
 *                 example: 25
 *     responses:
 *       200:
 *         description: Successful update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */

//UPDATE DATA PLAYER'S EXPERIENCE
/**
 * @swagger
 * /api/v1/players/exp/{id}:
 *   post:
 *     summary: Update player's experience
 *     description: Update experience dari player berdasaarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Player ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exp:
 *                 type: integer
 *                 description: New experience value for the player
 *                 example: 5000
 *     responses:
 *       200:
 *         description: Successful update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: Player ID
 *                     username:
 *                       type: string
 *                       description: Username of the player
 *                     email:
 *                       type: string
 *                       description: Email of the player
 *                     exp:
 *                       type: integer
 *                       description: Updated experience of the player
 *                     level:
 *                       type: integer
 *                       description: Level of the player
 */

//DELETE DATA
/**
 * @swagger
 * /api/v1/players/{id}:
 *   delete:
 *     summary: Delete data player 
 *     description: Delete data player berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Player ID
 *     responses:
 *       200:
 *         description: Successful deletion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */



