import React from 'react'

export default function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary " >
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Forecast</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Weather Updates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Maps</a>
                            </li>                        
                    
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
