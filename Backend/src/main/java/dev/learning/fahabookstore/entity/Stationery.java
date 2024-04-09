package dev.learning.fahabookstore.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "stationery")
public class Stationery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "material")
    private String material;
    @Column(name = "guarantee")
    private Integer guarantee;
    @OneToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product productInfo;
    @ManyToOne
    @JoinColumn(name = "origin_id", nullable = false)
    private Origin origin;
    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private Brand brand;
    @ManyToOne
    @JoinColumn(name = "color_id", nullable = false)
    private Color color;
    @ManyToOne
    @JoinColumn(name = "ink_color_id", nullable = false)
    private InkColor inkColor;
}
