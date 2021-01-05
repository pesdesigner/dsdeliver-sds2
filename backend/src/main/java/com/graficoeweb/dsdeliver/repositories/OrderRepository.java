package com.graficoeweb.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.graficoeweb.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	
}
