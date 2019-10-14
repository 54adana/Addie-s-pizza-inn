<div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="small">
                    <div class="card-title text-center">SMALL</div>
                    <div class="card-body">
                        <img src="./IMAGES/pizza1.jpg" width="200px" height="200px"> <br>
                        <div class="class">
                            <label for="">Toppings</label>
                            <select class="form control" id="toppings">
                                <option>peppeeroni</option>
                                <option>bacon</option>
                                <option>extra cheese</option>
                                <option>Mushroom</option>
                            </select> <br>
                            <label for="">Crust</label>
                            <select class="form control" id="Crust">
                                <option>Crispy</option>
                                <option>Stuffed</option>
                                <option>Glutten-free</option>
                            </select><br>
                            <h2 id="size" value="750">KSH 750 </h2>
                            <!-- <button id="cart">Add cart</button> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-title text-center">MEDIUM</div>
                <div class="card-body">
                    <img src="./IMAGES/pizza 2.jpeg" width="200px" height="200px"> <br>

                    <label for="">Toppings</label>
                    <select class="form control" id="toppings">
                        <option value="200">pepperoni ksh200</option>
                        <option value="210">bacon ksh 210</option>
                        <option label="extra cheese Ksh 180" value="180">extra cheese</option>
                        <option label="mushroom Ksh 160" value="160">Mushroom</option>
                    </select> <br>
                    <label for="">Crust</label>
                    <select class="form control" id="Crust">
                        <option>Crispy</option>
                        <option>Stuffed</option>
                        <option>Glutten-free</option>
                    </select><br>
                    <h2 id="size" value="950">KSH 950 </h2>
                    <!-- <button id="cart" >Add cart</button> -->

                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card ">
                <div class="card-title text-center">LARGE</div>
                <div class="card-body">
                    <img src="./IMAGES/pizza3.jpeg" width="200px" height="200px"> <br>

                    <label for="">Toppings</label>
                    <select class="form control" id="toppings">
                        <option>peppeeroni</option>
                        <option>bacon</option>
                        <option>extra cheese</option>
                        <option>Mushroom</option>
                    </select> <br>
                    <label for="">Crust</label>
                    <select class="form control" id="Crust">
                        <option>Crispy</option>
                        <option>Stuffed</option>
                        <option>Glutten-free</option>
                    </select><br>
                    <h2 id="size" value="1150">KSH 1150 </h2>
                    <!-- <button id="cart">add cart</button> -->

                </div>
            </div>

        </div>
    </div>
    <button id="order btn-primary" type="submit">ADD CART</button>

    <table class="table mt-5 overlay">
        <thead>
            <tr>
                <th scope="col">Pizza Order</th>
                <th scope="col">Size</th>
                <th scope="col">Crust</th>
                <th scope="col">Toppings</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody id="pizza">
            <tr>
                <th scope="row">1</th>
                <td id="size"></td>
                <td id="toppings"></td>
                <td class="crust"></td>
                <td class="total"></td>
            </tr>
        </tbody>
    </table>